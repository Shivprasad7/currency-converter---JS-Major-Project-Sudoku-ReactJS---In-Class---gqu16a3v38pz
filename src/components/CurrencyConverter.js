* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #main{
      background-color: rgb(11, 11, 33);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .container {
    border-radius: 11px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    width: 800px;
    height: 500px;
  }
  
  .community {
    background-color: rgb(255, 253, 253);
    text-align: center;
  }
  
  .card{
      background-color: rgb(15, 67, 66);
  }
  
  .why-us{
      background-color: rgba(85, 145, 142, 0.698);
      display: flex;
      justify-content: center;
      flex-direction: column;
  }
  
  .why-us-header{
    text-align: center;
  }
  
  .why-us-items{
    list-style: none;
    text-align: center;
  }
  
  .card-details{
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
