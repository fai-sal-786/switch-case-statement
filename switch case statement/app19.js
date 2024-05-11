// var app_status = 'pending' //pending, approve, rejected, review
// if(app_status === 'pending'){
//    console.log('your application is pending')
// }else if (app_status === 'approve'){
//    console.log('CONGRATS! YOUR APPLICATION IS LIVE')
// }else if (app_status === 'rejected'){
    // console.log('sorry!. we found some issues on your app so plz fix it and resubmiut again') 
// }else{
    // console.log('your app is under review')
// }


var app_status = 'pending' //pending, approve, rejected, review

switch (app_status) {
    case 'pending':
    console.log('your application is pending')
    break;
    case 'approve':
    console.log('CONGRATS! YOUR APPLICATION IS LIVE')
    break;
    case 'rejected':
    console.log('sorry!. we found some issues on your app so plz fix it and resubmiut again')   
    default:
        console.log('your app is under review')
        break;
}