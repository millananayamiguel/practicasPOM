///<reference types="Cypress" />
import { HomePage } from '../page-objects/home';
import { AddTask } from '../page-objects/practica_POM'


describe('test Add Task', () => {
  const addTask= new AddTask()
  const homePage= new HomePage()

  beforeEach(()=>{
    homePage.visitPage();
  })
    it('add task', () => {
      addTask.addTaskPan();
      addTask.addTaskNumbers();
      addTask.addTaskSymbol();
      addTask.addTaskEmoji();
      });
      it('check task ',()=>{
        addTask.checkTask();
        addTask.uncheckTask();
      })


})//ultimo