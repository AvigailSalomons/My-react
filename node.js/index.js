const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // מאפשר בקשות מסקריפטים חיצוניים
const PORT = process.env.PORT || 3000;

// חיבור למסד הנתונים
mongoose.connect('mongodb+srv://a0548543860:vovBu3qnqK7bHL27@villa.tavhn.mongodb.net/Villa?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// הגדרת המודל של הלקוח
const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dateStart: Date,
  dateEnd: Date,
  payment: Number,
});
const Customer = mongoose.model('Customer', CustomerSchema);

// פונקציה להוספת נתונים לדוגמה
const seedCustomers = async () => {
  try {
    // בדוק אם יש נתונים במסד הנתונים לפני ההוספה
    const count = await Customer.countDocuments();
    if (count === 0) {
      // הוסף לקוחות חדשים אם אין נתונים
      await Customer.insertMany([
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          dateStart: new Date('2024-09-01T00:00:00.000Z'),
          dateEnd: new Date('2024-09-30T00:00:00.000Z'),
          payment: 1000,
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '0987654321',
          dateStart: new Date('2024-10-01T00:00:00.000Z'),
          dateEnd: new Date('2024-10-31T00:00:00.000Z'),
          payment: 1500,
        },
        {
          name: 'Emily Johnson',
          email: 'emily.johnson@example.com',
          phone: '5678901234',
          dateStart: new Date('2024-11-01T00:00:00.000Z'),
          dateEnd: new Date('2024-11-30T00:00:00.000Z'),
          payment: 2000,
        },
      ]);
      console.log('Sample customers added.');
    }
  } catch (err) {
    console.error('Error seeding data:', err.message);
  }
};

// API לקבלת כל הלקוחות
app.get('/customer', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// API להוספת לקוח חדש
app.post('/customer', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// API למחיקת לקוח לפי ID
app.delete('/customer/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (deletedCustomer) {
      res.status(200).json(deletedCustomer);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// API לעדכון לקוח לפי ID
app.put('/customer/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedCustomer) {
      res.status(200).json(updatedCustomer);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// הפעלת פונקציה להוספת נתונים בעת הפעלת השרת
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await seedCustomers(); // הוסף נתונים לדוגמה
});
