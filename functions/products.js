const dotenv = require('dotenv').config();

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE);

exports.handler = async function (event, contex) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response.records.map((product) => {
      const { id, fields } = product;
      const {
        name,
        price,
        colors,
        featured,
        category,
        description,
        stars,
        stock,
        shipping,
        reviews,
        images,
      } = fields;
      const { url } = images[0];
      return {
        name,
        price,
        colors,
        featured,
        category,
        description,
        stars,
        stock,
        reviews,
        id,
        shipping,
        image: url,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'An error occured',
    };
  }
};
