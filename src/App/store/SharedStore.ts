import { action, configure, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { history } from '../..';
import { IMessage } from '../models/message';

configure({enforceActions: "always"});

export class SharedStore {
    @observable loggedIn = false;
    @observable loading = false;

    //yes I know this can be seen lol
    @action loginToApp = (username: string, password: string) => {
        if (username === 'TobiBobi' && password === '092319' ) {
            runInAction("change log in ", () => {
                setTimeout(() => {
                    runInAction("changing loading", () => {
                        this.loading = !this.loading;
                    })
                }, 3000);
                this.loading = !this.loading
                this.loggedIn = !this.loggedIn;
            })
        } else {
            runInAction("change log in", () => {
                this.loggedIn = false;
            })
            alert("Leave Now.");
        }
    }

  @action getRandomMessage = async () => {
    try {
      const messages = [
        {description: "Nobody is as great as you", author: 'Jeffrey'},
        {description: "I love you more than anything in the world", author: 'Jeffrey'},
        {description: "Your life matters and you're gonna do great things", author: 'n/a'},
        {description: "Tobi loves you", author: 'Jeffrey'},
        {description: "mow", author: 'Tobi'},
        {description: "Do what you love and you wont ever have to work", author: 'n/a'},
        {description: "Are you feeling it now mister krabs?", author: 'Spongebob'},
        {description: "I couldn't ask for a better girl!", author: 'Jeffrey'},
        {description: "To me you're always perfect", author: 'Jeffrey'},
        {description: "Theres only so much you can do sometimes", author: 'n/a'},
        {description: "It's ok to fail at something as long as you learn from it", author: 'n/a'},
        {description: "Build em up,  break em down", author: 'Torbjorn'},
        {description: "Hear me baby? hold together", author: 'Torbjorn'},
        {description: "You should try my meet balls!", author: 'Torbjorn'},
        {description: "Grrmmmmhh", author: 'Tobi'},
        {description: "Try being nice to someone today", author: 'n/a'},
        {description: "ooga booga", author: 'Anonymous'},
        {description: "Don't worry about who's ahead of you in life, you're at a perfect pace", author: 'Jeffrey'}


    ]
      let randomMessage = messages[Math.floor(Math.random() * messages.length)]
      alert(`"${randomMessage.description}" -${randomMessage.author}`);
    } catch(error) {
      console.log(error)
    }
  }

  // @action createMessage = async (message: IMessage) => {
  //   try {
  //     await agent.Messages.create(message);
  //     runInAction('create message', () => {
  //     })
  //     history.push('/');
  //   } catch (error) {
  //     runInAction('create message error', () => {
  //       console.log(error);
  //     })
  //     console.log(error);
  //   }
  // };

}

export default createContext(new SharedStore());
