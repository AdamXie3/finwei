from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import logging

logging.basicConfig(level=logging.DEBUG)

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
    try:
        logging.debug("Home route accessed")
        return render_template('index.html')
    except Exception as e:
        logging.error(f"Error in home route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/calculate_budget', methods=['POST'])
def calculate_budget():
    try:
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
    except Exception as e:
        logging.error(f"Error in calculate_budget: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')

        # Simple validation
        if not username or not email:
            return jsonify({'error': 'Username and email are required.'}), 400

        # Check if user already exists
        if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
            return jsonify({'error': 'User already exists.'}), 400

        # Create new user
        new_user = User(username=username, email=email)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User registered successfully!'}), 201
    except Exception as e:
        logging.error(f"Error in register route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/lessons')
def lessons():
    try:
        logging.debug("Lessons route accessed")
        return render_template('lessons.html')
    except Exception as e:
        logging.error(f"Error in lessons route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/islamic-finance')
def islamic_finance():
    try:
        logging.debug("Islamic Finance route accessed")
        return render_template('islamic_finance.html')
    except Exception as e:
        logging.error(f"Error in islamic finance route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/map')
def map():
    try:
        users = User.query.all()  # Ensure this query is correct
        logging.debug(f"Fetched users: {users}")
        return render_template('map.html', users=users)
    except SQLAlchemyError as e:
        logging.error(f"Database error in map route: {e}")
        return jsonify({'error': 'Database Error'}), 500
    except TemplateError as e:
        logging.error(f"Template error in map route: {e}")
        return jsonify({'error': 'Template Error'}), 500
    except Exception as e:
        logging.error(f"Error in map route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/pets')
def pets():
    try:
        pets = Budget.query.all()  # Adjust this if you have a separate Pet model
        logging.debug(f"Fetched pets: {pets}")
        return render_template('pets.html', pets=pets)
    except SQLAlchemyError as e:
        logging.error(f"Database error in pets route: {e}")
        return jsonify({'error': 'Database Error'}), 500
    except TemplateError as e:
        logging.error(f"Template error in pets route: {e}")
        return jsonify({'error': 'Template Error'}), 500
    except Exception as e:
        logging.error(f"Error in pets route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
