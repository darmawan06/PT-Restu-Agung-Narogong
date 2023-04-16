// library
var express = require('express');
var router = express.Router();

// configs
const configs = require('../config/configs');
const {saveImage} = require('../config/configStorageSave');

const multer = require("multer");
const path = require("path");


// tools
const formattedToday = require('../tools/formattedToday');

/* GET dataHeader listing. */
let {content, dataUserAdmin, dataVisitors} = require('./data.js')
let data = {content, dataUserAdmin, dataVisitors};
var manageJSON = require('../tools/manageJSON.js')

router.get('/', (req, res, next)=> {
  res.send({data, dataUserAdmin});
});


router.get('/:req_title', (req, res, next)=> {
  res.send(data[req.params.req_title]);
});

router.get('/cms/:data/:index', (req, res, next)=> {
  res.send(data[req.params.data][req.params.index]);
});

router.post('/cms/content/home', (req, res, next)=> {
  try{

    let checkFileAndUpload = (name)=>{
      let path = "/images/pages/";
      if(req.files){
        if(req.files[name]){
          let data = req.files[name];
          let nameHash = name + '.' + data.name.split('.')[1];
          data.mv(__dirname + `/../public${path}` + nameHash )
          return path + nameHash;          
        }
      }
      return undefined;
    }

    let content = data['content'];
    content["home"] = {
      hero : {
        title : req.body.hero_title,
        description : req.body.hero_description,
        image_1 : checkFileAndUpload("hero_image_1") || content['home'].hero.image_1,
        image_2 : checkFileAndUpload("hero_image_2") || content['home'].hero.image_2,
        image_3 : checkFileAndUpload("hero_image_3") || content['home'].hero.image_3
      },
      about_us : {
        experience : req.body.aboutus_experience,
        project_complete : req.body.aboutus_project_complete,
        workers : req.body.aboutus_workers,
        title : req.body.aboutus_title,
        subtitle : req.body.aboutus_subtitle,
        description : req.body.aboutus_description,
        award : req.body.aboutus_award.split(","),
        image : checkFileAndUpload("aboutus_image") || content['home'].about_us.image
      },
      our_advantedge : {
        title : req.body.ouradvantedge_title,
        subtitle : req.body.ouradvantedge_subtitle,
        items : [{
          icon : checkFileAndUpload("ouradvantedge_item1_icon") || content['home'].our_advantedge.items[0].icon,
          title : req.body.ouradvantedge_item1_title,
          description : req.body.ouradvantedge_item1_description
        },{
          icon : checkFileAndUpload("ouradvantedge_item2_icon") || content['home'].our_advantedge.items[1].icon,
          title : req.body.ouradvantedge_item2_title,
          description : req.body.ouradvantedge_item2_description
        },{
          icon : checkFileAndUpload("ouradvantedge_item3_icon") || content['home'].our_advantedge.items[2].icon,
          title : req.body.ouradvantedge_item3_title,
          description : req.body.ouradvantedge_item3_description
        }]
      },
      our_project : {
        title : req.body.ourproject_title,
        subtitle :  req.body.ourproject_subtitle
      },
      testimonial : {
        title :  req.body.testimonial_title,
        subtitle :  req.body.testimonial_subtitle
      }
    }
    manageJSON.setDataJSON({dir: './public/data/content.json', data : content});
    res.send({
      status : "200",
      message : `Update Content Berhasil`
    });
  }catch(e){
    console.log(e);
    res.send({
      status : "404",
      message : `Update Content Gagal`
    });
  }
});

router.post('/cms/content/galery', (req, res, next)=>{
  try{
    let checkFileAndUpload = (name, id)=>{
      let path = "/images/galery/";
      if(req.files){
        if(req.files[name]){
          let data = req.files[name];
          let nameHash = id + '.' + data.name.split('.')[1];
          data.mv(__dirname + `/../public${path}` + nameHash )
          return path + nameHash;          
        }
      }
      return undefined;
    }

    let content = data['content'];
    var uniqueID = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    content["galery"].push({
      "id" : uniqueID,
      "src" : checkFileAndUpload('image', uniqueID)
    })
    manageJSON.setDataJSON({dir: './public/data/content.json', data : content});
    res.send({
      status : "200",
      message : `Update Content Berhasil`
    });
  }catch(e){
    console.log(e)
    res.send({
      status : "404",
      message : `Update Content Gagal`
    });
  }
})

router.post('/cms/content/galery/remove',(req, res, next)=>{
  try{
    let content = data['content'];
    const objWithIdIndex = content['galery'].findIndex((obj) => obj.id == req.body.id);
    if (objWithIdIndex > -1) {
      content['galery'].splice(objWithIdIndex, 1);
      manageJSON.setDataJSON({dir: './public/data/content.json', data : content});
      res.send({
        status : "200",
        message : `Success Delete`
      });   
    }
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Delete`
    });
  }
})

// router.all('/login',(req, res, next)=>{
//   try{
//     let found = false;
//     dataUserAdmin.forEach((e)=>{
//       if(e.username == req.body.username && e.password == req.body.password){
//         found = true;
//         res.send({
//           status : "200",
//           data : e,
//         });
//       }
//     })
//     if(!found){
//       res.send({
//         status : "505",
//         message : "Username Dan Password Tidak Di Temukan"
//       })      
//     }
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Select User Admin`
//     });
//   }
// })

// router.post('/useradmin/delete', (req,res,next)=>{
//   try{
//     const objWithIdIndex = dataUserAdmin.findIndex((obj) => obj.id == req.body.id);

//     if (objWithIdIndex > -1) {
//       dataUserAdmin.splice(objWithIdIndex, 1);
//       manageJSON.setDataJSON({dir: './public/data/useradmin.json', data : dataUserAdmin});  
//       res.send({
//         status : "200",
//         message : `Success Delete User Admin`
//       });   
//     }
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Delete User Admin`
//     });
//   }
// })

// router.post('/useradmin/add', (req, res, next)=>{
//   try{
//     var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
//     dataUserAdmin.push({
//         id : uniq,
//         username : req.body.username,
//         password : req.body.password,
//         type : req.body.type,
//     });
//     manageJSON.setDataJSON({dir: './public/data/useradmin.json', data : dataUserAdmin});  
//     res.send({
//       status : "200",
//       message : `Success Insert User Admin`
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Insert User Admin`
//     });
//   }
// })

// router.post('/useradmin', (req, res, next)=>{
//   try{
//     dataUserAdmin.find((e)=>{
//       if(e.id == req.body.id){
//         e.username = req.body.username;
//         e.password = req.body.password;
//         e.type = req.body.type;
//       }
//     });
//     manageJSON.setDataJSON({dir: './public/data/useradmin.json', data : dataUserAdmin});  
//     res.send({
//       status : "200",
//       message : `Success Updated User Admin`
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Updated User Admin`
//     });
//   }
// })

// router.get('/useradmin/:id', (req,res,next)=>{
//   const filterData = dataUserAdmin.filter((e)=>{
//     return e.id == req.params.id
//   })
//   if(filterData.length != 0){
//     res.send(filterData)
//   }else{
//     res.send({
//       status : "505",
//       message : `We No Have User Admin By ID ${req.params.id}`
//     });
//   }
// })


// router.get('/useradmin', (req, res, next)=> {
//   res.send(dataUserAdmin);
// });



// router.post('/keunggulan',multerSingle({req_name : "image", location_path : "./public/images/keunggulan/"}), (req, res, next)=>{
//   try{
//     dataContent.keunggulan.find((e)=>{
//       if(e.id == req.body.id){
//         e.icon = (req.file) ? `/images/keunggulan/${req.file.filename}` : e.icon;
//         e.deskripsi = req.body.deskripsi;
//       }
//     });
//     manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//     res.send({
//       status : "200",
//       message : `Success Updated keunggulan`
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Updated keunggulan`
//     });
//   }
// })

// router.get('/keunggulan/:id', (req,res,next)=>{
//   const filterData = dataContent.keunggulan.filter((e)=>{
//     return e.id == req.params.id
//   })
//   if(filterData.length != 0){
//     res.send(filterData)
//   }else{
//     res.send({
//       status : "505",
//       message : `We No Have Quality By ID ${req.params.id}`
//     });
//   }
// })

// router.post('/tentang',multerSingle({req_name : "image", location_path : "./public/images/tentang/"}), (req, res, next)=>{
//   try{
//     dataContent.tentang.nama = req.body.nama;
//     dataContent.tentang.deskripsi = req.body.deskripsi;
//     dataContent.tentang.visi = req.body.visi;
//     dataContent.tentang.misi = req.body.misi;
//     dataContent.tentang.logo = (req.file) ? `/images/tentang/${req.file.filename}` : dataContent.tentang.logo
//     manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//     res.send({
//       status : "200",
//       message : `Success Updated Tentang`
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Updated Tentang`
//     });
//   }
// })

// router.post('/kontak', (req, res, next) =>{
//   try{
//     dataContent.kontak.alamat_1 = req.body.alamat_1;
//     dataContent.kontak.alamat_2 = req.body.alamat_2;
//     dataContent.kontak.telepon = req.body.telepon;
//     dataContent.kontak.email = req.body.email;
//     dataContent.kontak.whatsapp_1 = req.body.whatsapp_1;
//     dataContent.kontak.whatsapp_2 = req.body.whatsapp_2;
//     dataContent.kontak.link_instagram = req.body.link_instagram;
//     dataContent.kontak.link_youtube = req.body.link_youtube;
//     manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//     res.send({
//       status : "200",
//       message : `Success Updated Kontak`
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Updated Kontak`
//     });
//   }
// });

// router.post('/produk/add',multerSingle({req_name : "image", location_path : "./public/images/products/"}), (req,res,next)=>{
//   try{
//     var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
//       dataContent.produk.push({
//         id : uniq,
//         name : req.body.name || "",
//         desc : req.body.deskripsi || "",
//         specs : req.body.specs.split(',') || [""],
//         jenis : req.body.jenis.split(',') || [""],
//         stok : req.body.stok || "",
//         img : (req.file) ? `/images/products/${req.file.filename}` : ""
//       })  
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//       res.send({
//         status : "200",
//         message : `Success Tambah Portofolio`
//       });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Tambah Portofolio`
//     });
//   }
// })


// router.get('/produk/:id', (req,res,next)=>{
//   const filterDataProduct = dataContent.produk.filter((e)=>{
//     return e.id == req.params.id
//   })
//   if(filterDataProduct.length != 0){
//     res.send(filterDataProduct)
//   }else{
//     res.send({
//       status : "505",
//       message : `We No Have Product By ID ${req.params.id}`
//     });
//   }
// })

// router.post('/produk',multerSingle({req_name : "image", location_path : "./public/images/products/"}) ,(req, res, next)=> {
//   try{
//     dataContent.produk.find((e)=>{
//         if(e.id == req.body.id){
//           e.name = req.body.name,
//           e.desc = req.body.deskripsi,
//           e.specs = req.body.specs.split(',') || [""],
//           e.jenis = req.body.jenis.split(',') || [""],
//           e.stok = req.body.stok,
//           e.img = (req.file) ? `/images/products/${req.file.filename}` : e.img
//           res.send({
//             status : "200",
//             message : `Success Update Product`
//           });
//         }
//         manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//     });
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Update Product`
//     });
//   }
// });

// router.post('/produk/delete', (req,res,next)=>{
//   try{
//     const objWithIdIndex = dataContent.produk.findIndex((obj) => obj.id == req.body.id);

//     if (objWithIdIndex > -1) {
//       dataContent.produk.splice(objWithIdIndex, 1);
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//       res.send({
//         status : "200",
//         message : `Success Delete Product`
//       });   
//     }
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Delete Product`
//     });
//   }
// })

// router.get('/portofolio/:id', (req,res,next)=>{
//   const filterData = dataContent.portofolio.filter((e)=>{
//     return e.id == req.params.id
//   })
//   if(filterData.length != 0){
//     res.send(filterData)
//   }else{
//     res.send({
//       status : "505",
//       message : `We No Have Product By ID ${req.params.id}`
//     });
//   }
// })

// router.post('/portofolio/delete', (req,res,next)=>{
//   try{
//     const objWithIdIndex = dataContent.portofolio.findIndex((obj) => obj.id == req.body.id);

//     if (objWithIdIndex > -1) {
//       dataContent.portofolio.splice(objWithIdIndex, 1);
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//       res.send({
//         status : "200",
//         message : `Success Delete Portofolio`
//       });   
//     }
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Delete Portofolio`
//     });
//   }
// })

// router.post('/portofolio/add',multerSingle({req_name : "image", location_path : "./public/images/portofolio/"}), (req,res,next)=>{
//   try{
//     var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
//     if(req.body != null && req.file){
//       dataContent.portofolio.push({
//         id : uniq,
//         img : `/images/portofolio/${req.file.filename}` || "",
//         deskripsi : req.body.deskripsi || ""
//       })
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//       res.send({
//         status : "200",
//         message : `Success Delete Portofolio`
//       });
//     }else{
//       throw status;
//     }
//   }catch(e){
//     res.send({
//       status : "404",
//       message : `Failed Delete Portofolio`
//     });
//   }
// })


// router.post('/portofolio',multerSingle({req_name : "image", location_path : "./public/images/portofolio/"}) ,(req, res, next)=> {
//   try{
//       dataContent.portofolio.find((e)=>{
//         if(e.id == req.body.id){
//           if(req.file){
//             e.img = `/images/portofolio/${req.file.filename}`
//           }
//           e.deskripsi = req.body.deskripsi 
//         }
//       })
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});
//       res.send({
//         status : "200",
//         message : `Success Updated Portofolio`
//       });
//   }catch(e){
//       res.send({
//         status : "404",
//         message : `Failed Updated Portofolio`
//       });
//   }
// });


// router.post('/testimoni',(req, res, next)=> {
//     var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
//     if(req.body.name != null){
//       dataContent.testimoni.push({
//         id : uniq,
//         date: formattedToday,
//         email : req.body.email || "",
//         name : req.body.name || "",
//         rating : parseInt(req.body.rating) || "",
//         deskripsi : req.body.deskripsi || ""
//       })
//       manageJSON.setDataJSON({dir: './public/data/content.json', data : dataContent});    
//       res.send({
//         status : "201",
//         message : `Success Created Testimoni`
//       });  
//     }
// });


// router.post('/visitors' ,(req, res, next)=> {
//     if(req.body.ip_address != null){
//       dataVisitors.push({
//         id : new Date().getTime(),
//         date : formattedToday,
//         ip_address  : req.body.ip_address,
//         browser : req.body.browser || "Not Found",
//         city : req.body.city || "Not Found",
//         country : req.body.country || "Not Found",
//         isp : req.body.isp || "Not Found",
//         region : req.body.regionName || "Not Found",
//       })
//       manageJSON.setDataJSON({dir: './public/data/visitors.json', data : dataVisitors});    
//       res.send({
//         status : "201",
//         message : `Success Created Visitors`
//       });  
//     }
// });

// router.get('/visitors', (req, res, next)=> {
//   res.send(dataVisitors);
// });

module.exports = router;


