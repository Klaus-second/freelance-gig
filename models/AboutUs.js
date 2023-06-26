const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema(
  {
    title1: { type: String, minlength: 50 },
    title2: { type: String, minlength: 10 },
    description: { type: String, minlength: 50 },
    list1: { type: String, minlength: 10 },
    list2: { type: String, minlength: 10 },
    list3: { type: String, minlength: 10 },
    list4: { type: String, minlength: 10 },
    list5: { type: String, minlength: 10 },
    list6: { type: String, minlength: 10 },
    list7: { type: String, minlength: 10 },

    SellProperty: { type: String, minlength: 50 },
    DailyApartment: { type: String, minlength: 50 },
    FamilyHouse: { type: String, minlength: 50 },

    testimonial: { type: String, minlength: 10 },
    ClientSay: { type: String, minlength: 50 },
    line1: { type: String, minlength: 50 },
    say: { type: String, minlength: 50 },

    ClientName: { type: String, minlength: 5 },
    ClientPosition: { type: String, minlength: 5 },
    clientPic: { type: String },
  },
  {
    timestamps: true,
  }
);

const AboutUs = mongoose.model("AboutUS", AboutUsSchema);
module.exports = AboutUs;
