import pandas as pd
from flask import Flask, request, jsonify, render_template
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
import joblib
from flask_cors import CORS
import io

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load your pre-trained model and scaler
model = tf.keras.models.load_model(r'C:\Users\HP\OneDrive\Desktop\Javascript\chapter32\model.h5')
scaler = joblib.load(r'C:\Users\HP\OneDrive\Desktop\Javascript\chapter32\scaler.pkl')

# Function to check data
def check_data(df):
    flag_n = df.isnull().sum().sum()  # For null values
    flag_d = df.duplicated().sum()    # For duplicated values
    flag_e = (df == '').sum().sum()   # For empty values
    return flag_n, flag_d, flag_e

# Function to handle null values
def handle_null_values(df, strategy='mean', categorical_fill='mode'):
    numerical_cols = df.select_dtypes(include=['number']).columns
    if strategy in ['mean', 'median', 'most_frequent']:
        for col in numerical_cols:
            if df[col].isnull().any():
                if strategy == 'mean':
                    fill_value = df[col].mean()
                elif strategy == 'median':
                    fill_value = df[col].median()
                else:
                    fill_value = df[col].mode()[0]
                df[col].fillna(fill_value, inplace=True)
   
    categorical_cols = df.select_dtypes(exclude=['number']).columns
    if categorical_fill == 'mode':
        for col in categorical_cols:
            if df[col].isnull().any():
                fill_value = df[col].mode()[0]
                df[col].fillna(fill_value, inplace=True)
    return df

# Function to clean data
def clean(df):
    flag_n, flag_d, flag_e = check_data(df)
    if flag_e != 0:
        df.replace('', pd.NA, inplace=True)
    if flag_n != 0:
        df = handle_null_values(df)
    if flag_d != 0:
        df = df.drop_duplicates()
    return df

# Preprocess data
def preprocess(df):
    mapping = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7}
    df['grade_encoded'] = df['grade'].map(mapping)
    df.drop(['grade'], axis=1, inplace=True)
   
    one_hot_encoded = pd.get_dummies(df[['home ownership', 'verification status', 'initial list status', 'application type']])
    df = pd.concat([df, one_hot_encoded], axis=1)
    df.drop(['home ownership', 'verification status', 'initial list status', 'application type'], axis=1, inplace=True)
   
    frequency = df['batch enrolled'].value_counts() / len(df)
    df['batch_enrolled_encoded'] = df['batch enrolled'].map(frequency)
    df.drop(['batch enrolled'], axis=1, inplace=True)
   
    frequency = df['sub grade'].value_counts() / len(df)
    df['sub_grade_encoded'] = df['sub grade'].map(frequency)
    df.drop(['sub grade'], axis=1, inplace=True)
   
    target_mean = df.groupby('loan title')['loan status'].mean()
    df['loan_title_encoded'] = df['loan title'].map(target_mean)
    df.drop(['loan title'], axis=1, inplace=True)
   
    # Ensure 'loan status' is the last column
    cols = list(df.columns)
    cols.append(cols.pop(cols.index('loan status')))
    df = df[cols]
   
    X = df.drop(columns=['loan status'])
   
    X = scaler.transform(X)
   
    return X

# Serve the HTML form
@app.route('/')
def upload_file():
    return render_template('upload.html')

# Create prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file and file.filename.endswith('.xlsx'):
        # Read the Excel file into a pandas DataFrame
        file_data = file.read()
        df_new = pd.read_excel(io.BytesIO(file_data))
        
        # Clean and preprocess the new data
        df_new = clean(df_new)
        df_new_processed = preprocess(df_new)
       
        # Predict using the pre-trained model
        predictions = model.predict(df_new_processed)
        predictions = ['Defaulter' if p > 0.5 else 'Non-Defaulter' for p in predictions]
       
        return jsonify({'predictions': predictions})
    else:
        return jsonify({'error': 'Invalid file format'})

if __name__ == "__main__":
    app.run(debug=True)