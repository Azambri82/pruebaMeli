const axios = require('axios');
const express = require('express');
const app = express();
const port = 3001;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.json({
    name: 'az',
    value: 9,
  });
});
/*client.get("https://api.mercadolibre.com/items/"+id+"/description", function (description, response) {
     const description = description.plain_text;
  )};*/

app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  axios
    .all([
      axios.get('https://api.mercadolibre.com/items/' + id),
      axios.get('https://api.mercadolibre.com/items/' + id + '/description'),
    ])
    .then(
      axios.spread((response1, response2) => {
        const data1 = response1.data;
        const data2 = response2.data;
        res.json({
          author: {
            name: 'Alex',
            lastname: 'Zambrano',
          },
          item: {
            id: data1.id,
            title: data1.title,
            price: data1.price,
            picture: data1.secure_thumbnail,
            condition: data1.condition,
            free_shipping: data1.shipping.free_shipping,
            sold_quantity: data1.sold_quantity,
            description: data2.plain_text,
          },
        });
      })
    )
    .catch((error) => {
      console.log(error);
    });
});

app.get('/api/items/', (req, res) => {
  const { q } = req.query;
  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)
    .then((response) => {
      const items = response.data.results;
      const dataRes = {
        author: {
          name: 'String',
          lastname: 'String',
        },
        categories: [],
        items: [],
      };
      items.map((item) => {
        const dato = {
          id: item.id,
          title: item.title,
          price: {
            currency: '$',
            amount: item.price,
            decimals: 0,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          address: item.address.state_name,
        };
        dataRes.items.push(dato);
        axios
          .get(`https://api.mercadolibre.com/categories/${item.category_id}`)
          .then((response2) => {
            dataRes.categories.push(response2.data.name);
          }).catch((error)=>{
            console.log(error);
          });
      });
      return dataRes;
    }).then(data=>{
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
  });

app.listen(port, () => {
  console.log('Mi port ' + port);
});
