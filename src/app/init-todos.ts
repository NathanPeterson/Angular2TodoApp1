export class Init{
  load(){
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined ){
        console.log('No todos found.... creating...');
        var todos = [
          {
              text: 'pick up kids'
          },
          {
            text: 'meeting with boss'
          },
          {
            text: 'dinner with wife'
          }
        ];

        localStorage.setItem('todos', JSON.stringify(todos));
        return;
    }else{
      console.log('Found todos...');
    }
  }
}
