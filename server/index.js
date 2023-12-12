import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 5000;
let count=5
app.use(express.json())
let arr=[
    {
        "id":1,
        "productimage":"https://bytelecom.az/media/2023/09/26/product_images/25563/iphone-15-pro-max-black-titanium-1.jpg",
        "name":"Iphone 15",
        "price":1500,
       
    },
    {
        "id":2,
        "productimage":"https://www.soliton.az/images/articles/2023/02/01/20230201122202503_c3_22.jpg",
        "name":"Samsung Galaxy S23",
        "price":1400,
       
    },
    {
        "id":3,
        "productimage":"https://www.bakuelectronics.az/assets/images/products/101152/xiaomi-mi-11-lite-5g-8gb256gb-bubblegum-blue-1.jpg",
        "name":"Xiaomi Mi 11 Lite",
        "price":1000,
        
    },
    {
        "id":4,
        "productimage":"https://strgimgr.umico.az/sized/840/27749-7ea6882479d1f6d4a90bc658c4f2ad88.jpg",
        "name":"Huawei P40 Lite",
        "price":800,
        
    }
    ]
app.get("/", (req, res) => {
  res.send(arr);
});
// app.get("/*", (req, res) => {
//     res.status(404).json({message:"Aqa burasi neresi aq"})
//   });
app.get("/:id", (req, res) => {
    const id=req.params.id
    const IDdata=arr.find(x=>x.id==+id)
   
    if(IDdata){
        res.send(IDdata);
        res.status(200).json({message:"User tapildi"})
    }
    else{
        res.status(404).json({message:"User tapilmadi"})
    }
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.post("/", function (req, res) {
    const newarr={
        id:count++,
        productimage:req.body.productimage,
        name:req.body.name,
        price:req.body.price
    }
    arr.push(newarr)
    res.send(arr)
});

app.put("/:id", function (req, res) {
const id=req.params.id
arr=arr.filter(x=>x.id!== +id)
const newObj={
    id:+id,
    productimage:req.body.productimage,
    name:req.body.name,
    price:req.body.price
}
arr.push(newObj)
arr.sort((a,b)=>a.id-b.id)
res.send(arr)
});
app.delete("/:id", function (req, res) {
    const id=req.params.id
    arr=arr.filter(x=>x.id!== +id)
    res.send(arr);
});