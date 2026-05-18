var wms_layers = [];

var format_rajshahi_Dis_0 = new ol.format.GeoJSON();
var features_rajshahi_Dis_0 = format_rajshahi_Dis_0.readFeatures(json_rajshahi_Dis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rajshahi_Dis_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rajshahi_Dis_0.addFeatures(features_rajshahi_Dis_0);
var lyr_rajshahi_Dis_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rajshahi_Dis_0, 
                style: style_rajshahi_Dis_0,
                popuplayertitle: 'rajshahi_Dis',
                interactive: true,
    title: 'rajshahi_Dis<br />\
    <img src="styles/legend/rajshahi_Dis_0_0.png" /> <br />\
    <img src="styles/legend/rajshahi_Dis_0_1.png" /> Bogura<br />\
    <img src="styles/legend/rajshahi_Dis_0_2.png" /> Chapainababganj<br />\
    <img src="styles/legend/rajshahi_Dis_0_3.png" /> Joypurhat<br />\
    <img src="styles/legend/rajshahi_Dis_0_4.png" /> Naogaon<br />\
    <img src="styles/legend/rajshahi_Dis_0_5.png" /> Natore<br />\
    <img src="styles/legend/rajshahi_Dis_0_6.png" /> Pabna<br />\
    <img src="styles/legend/rajshahi_Dis_0_7.png" /> Rajshahi<br />\
    <img src="styles/legend/rajshahi_Dis_0_8.png" /> Sirajganj<br />' });

lyr_rajshahi_Dis_0.setVisible(true);
var layersList = [lyr_rajshahi_Dis_0];
lyr_rajshahi_Dis_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_rajshahi_Dis_0.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_rajshahi_Dis_0.set('fieldLabels', {'adm2_name': 'header label - always visible', 'adm2_name1': 'header label - always visible', 'adm2_name2': 'header label - always visible', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_rajshahi_Dis_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});