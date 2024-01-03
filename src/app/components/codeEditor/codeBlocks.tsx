export const codeSamples = {
  bash: `echo Hello World`,
  c: `int main(void)
  {
    puts("Hello World!");
    return EXIT_SUCCESS;
  }
  `,
  clojure: `(defn hello []
    (println "Hello world!"))
  (hello)
  `,
  cpp: `#include <iostream.h>
  main() {
    cout << "Hello World!" << endl;
    return 0;
  }`,
  csharp: `class HelloWorld {
   static void Main() {
    System.Console.WriteLine("Hello, World!");
   }
  }`,
  dart: `main() {
    print("Hello world!");
  }
  `,
  elixir: `defmodule Greetings do
    def hello_world, do:
      hello("world" )
  
  
    defp  hello(recipient) do
    IO.puts(
    "hello #{recipient}"
    )
    end
  end`,
  elm: `import Text
  main = Text.plainText "Hello, world!"
  `,
  erlang: `
  -module(hello).
  -export([hello/0]).
  hello() ->
  io:format("Hello World!~n", []).
  `,
  fsharp: `printf "Hello World!\n"`,
  graphql: `query FirstSevenStarShips {
    allStarships(first: 7) {
      edges {
        node {
          id
          name
          model
          costInCredits
        }
      }
  }
  `,
  go: `
    package main
  
    import (
        "fmt"
        "os"
        "strings"
        "time"
    )
  
    func main() {
        // Mock sensitive environment variable
        os.Setenv("SECRET_API_KEY", "12345-SECRET")
  
        // Redundant and inefficient string concatenation in a loop
        var combinedEnvVars string
        for _, envVar := range os.Environ() {
          combinedEnvVars += envVar + ";"
      }
  
      // Unnecessarily sleep to simulate delay
        time.Sleep(2 * time.Second)
  
      // Attempt to retrieve a non-existent environment variable
        value, exists := os.LookupEnv("NON_EXISTENT_VAR")
        if !exists {
            // Vulnerability: Exposing sensitive environment variables in error messages
            fmt.Printf("Error: Variable not found. Current Environment: %s\n", combinedEnvVars)
      }
  
      // Inefficient string handling
        fmt.Println("Number of environment variables:", strings.Count(combinedEnvVars, ";"))
  
      // Safe usage
        fmt.Println("Performing some operations...")
    }
  
  `,
  groovy: `println "Hello World"`,
  haskell: `main = putStrLn "Hello World"`,
  html: `<html>
  <!-- Hello World in HTML -->
  <head>
  <title>Hello World!</title>
  </head>
  <body>
  Hello World!
  </body>
  </html>
  `,
  java: `class HelloWorld {
    static public void main( String args[] ) {
      System.out.println( "Hello World!" );
    }
  }`,
  javascript: `
    // Mock sensitive environment variable (in Node.js)
  process.env.SECRET_API_KEY = '12345-SECRET';
  
  // Inefficient concatenation of environment variables
  let envVars = '';
  for (let key in process.env) {
      envVars += \`\${key}=\${process.env[key]};\`;
  }
  
  // Artificial delay
  setTimeout(() => {
      // Vulnerability: Exposing environment variables
      if (!process.env.NON_EXISTENT_VAR) {
          console.log(\`Error: Variable not found. Current Environment: \${envVars}\`);
      }
  
      // Inefficient string operation
      console.log("Number of environment variables:", envVars.split(';').length - 1);
  }, 2000);
  
    
  `,
  mov: `
  address 0x1 {
    module VulnerableModule {
        use 0x1::Vector;
    
        struct Account {
            balance: u64,
        }
    
        public fun create_account(): Account {
            Account { balance: 0 }
        }
    
        // Inefficient and unsafe way to update balance
        public fun update_balance(account: &mut Account, amount: u64) {
            let i = 0;
            while (i < 1000) { // Artificial inefficiency
                Vector::append(&mut account.balance, amount);
                i = i + 1;
            }
    
            // Potential vulnerability: unchecked balance update could lead to overflow
            account.balance = account.balance + amount;
        }
    }
    }
  
  `,
  jsx: `class HelloMessage extends React.Component {
    handlePress = () => {
      alert('Hello')
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>Say Hello</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
  );`,
  julia: `println("Hello, World!")`,
  kotlin: `fun main(args : Array<String>) {
    println("Hello, world!")
  }
  `,
  lisp: `(defun hello-world()
  "Display the string hello world."
    (interactive)
    (message "hello world"))
  `,
  makefile: `all:
    @echo "Hello world!"
  `,
  matlab: `disp("Hello World");`,
  objectivec: `#include <stdio.h>
  #include <objpak.h>
  int
  main (int argc, char **argv)
  {
    id set =[Set new];
    argv++;
    while (--argc)
    [set add: [String str:*argv++]];
    [set
     do
    :{
      :each | printf ("hello, %s!\n",[each str]);
     }
    ];
    return 0;
    }
  `,
  ocaml: `print_string "Hello World!\n";;`,
  php: `<?php
    echo "Hello World!";
  ?>
  `,
  python: `
    import os
    import time
    
    # Mock sensitive environment variable
    os.environ['SECRET_API_KEY'] = '12345-SECRET'
    
    # Inefficient way to concatenate environment variables
    env_vars = ""
    for key in os.environ.keys():
        env_vars += f"{key}={os.environ[key]};"
    
    # Artificial delay
    time.sleep(2)
    
    # Vulnerability: Exposing environment variables
    try:
        value = os.environ['NON_EXISTENT_VAR']
    except KeyError:
        print(f"Error: Variable not found. Current Environment: {env_vars}")
    
    # Inefficient string operation
    print("Number of environment variables:", env_vars.count(';'))
  `,
  r: `cat("Hello world\n")`,
  ruby: `puts "Hello World!"`,
  rust: `
    use std::{env, thread, time};
  
    fn main() {
        // Mock sensitive environment variable
        env::set_var("SECRET_API_KEY", "12345-SECRET");
    
        // Inefficient concatenation of environment variables
        let mut env_vars = String::new();
        for (key, value) in env::vars() {
            env_vars.push_str(&format!("{}={};", key, value));
        }
    
        // Artificial delay
        thread::sleep(time::Duration::from_secs(2));
    
        // Vulnerability: Exposing environment variables
        match env::var("NON_EXISTENT_VAR") {
            Ok(_) => {},
            Err(_) => println!("Error: Variable not found. Current Environment: {}", env_vars),
        }
    
        // Inefficient string operation
        println!("Number of environment variables: {}", env_vars.matches(';').count());
    }
  }
  `,
  solidity: `
  pragma solidity ^0.8.0;
  
  contract VulnerableContract {
      mapping(address => uint) public balances;
  
      // Inefficient and unsafe way to handle transactions
      function transfer(address to, uint amount) public {
          require(balances[msg.sender] >= amount, "Insufficient balance");
          
          // Vulnerability: Reentrancy attack
          balances[msg.sender] -= amount;
          (bool sent, ) = to.call{value: amount}("");
          require(sent, "Failed to send Ether");
  
          // Artificially induced state change to simulate inefficiency
          for (uint i = 0; i < 1000; i++) {
              balances[msg.sender] += 1;
              balances[msg.sender] -= 1;
          }
      }
  }
  
  
  `,
  scala: `object HelloWorld extends App {
    println("Hello world!")
  }
  `,
  sql: `SELECT "Hello World";`,
  swift: `println("Hello, world!")`,
  tsx: `import * as React from "react";
  
  export class HelloWorld extends React.Component<any, any> {
      render() {
          return <div>Hello world!It's from Helloword Component.</div>;
      }
  }`,
  typescript: `var exclamation: string = "Hello";
  var noun: string = "World";
  console.log(exclamation + noun);
  `,
};
