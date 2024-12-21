from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finwei.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Budget(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    monthly_income = db.Column(db.Float, nullable=False)
    needs = db.Column(db.Float)
    wants = db.Column(db.Float)
    savings = db.Column(db.Float)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate_budget', methods=['POST'])
def calculate_budget():
    data = request.get_json()
    monthly_income = float(data.get('monthly_income', 0))
    
    # Calculate budget using 50/30/20 rule
    needs = monthly_income * 0.5
    wants = monthly_income * 0.3
    savings = monthly_income * 0.2
    
    return jsonify({
        'needs': round(needs, 2),
        'wants': round(wants, 2),
        'savings': round(savings, 2),
        'categories': {
            'needs': ['Housing', 'Utilities', 'Groceries', 'Transportation', 'Insurance'],
            'wants': ['Entertainment', 'Dining out', 'Shopping', 'Hobbies', 'Travel'],
            'savings': ['Emergency fund', 'Retirement', 'Investments', 'Debt repayment']
        }
    })

@app.route('/lessons')
def lessons():
    return render_template('lessons.html')

@app.route('/islamic-finance')
def islamic_finance():
    return render_template('islamic_finance.html')

@app.route('/basic-finance')
def basic_finance():
    return render_template('basic_finance.html')

@app.route('/budgeting')
def budgeting():
    return render_template('budgeting.html')

@app.route('/investments')
def investments():
    return render_template('investments.html')

@app.route('/saving')
def saving():
    return render_template('saving.html')

@app.route('/debt')
def debt():
    return render_template('debt.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=9999)
