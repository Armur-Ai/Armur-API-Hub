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
        "bytes"
        "fmt"
        "io/ioutil"
        "net/http"
        "net/url"
        "strings"
    )
    
    func main() {
        apiURL := "https://api.armur.ai/go/apiaudit/audit/create"
        data := url.Values{}
        data.Set("data", "Vulnerability")
    
        formData := url.Values{}
        formData.Set("content", "content_to_send")
        formData.Set("token", "100")
        formData.Set("temperature", "0.4")
    
        client := &http.Client{}
        req, err := http.NewRequest("POST", apiURL+"?"+data.Encode(), strings.NewReader(formData.Encode()))
        if err != nil {
            fmt.Println(err)
            return
        }
    
        req.Header.Add("Authorization", "Bearer your_api_key_here")
        req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
    
        resp, err := client.Do(req)
        if err != nil {
            fmt.Println(err)
            return
        }
        defer resp.Body.Close()
    
        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            fmt.Println(err)
            return
        }
    
        fmt.Println(string(body))
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
    const axios = require('axios');
    const FormData = require('form-data');
      
    const form_data = new FormData();
    form_data.append('content', 'content_to_send');
    form_data.append('token', 100);
    form_data.append('temperature', 0.4);
    
    const config = {
      headers: {
        ...form_data.getHeaders(),
        'Authorization': 'Bearer your_api_key_here'
         }
     };
    
    axios.post('https://api.armur.ai/go/apiaudit/audit/create?data=Vulnerability', form_data, config)
      .then(response => {
          console.log(response.data);
          })
      .catch(error => {
          console.log(error);
    });
        
        `,
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
  import requests

  # The base URL of the API
  url = 'https://api.armur.ai/go/apiaudit/audit/create'

  # The API key (Bearer Token)
  api_key = 'your_api_key_here'

  # The query parameters
  params = {
    'data': 'Vulnerability'
  }

  # The form data
  form_data = {
    'content': 'content_to_send',
    'token': 100,  # This seems to be a fixed value as per the screenshot
    'temperature': 0.4  # This also seems to be a fixed value as per the screenshot
  }

  # The headers including the Authorization with the Bearer token
  headers = {
    'Authorization': f'Bearer {api_key}'
  }

  # The POST request to the API
  response = requests.post(url, params=params, data=form_data, headers=headers)

  # Check if the request was successful
  if response.status_code == 200:
    print('Success:', response.json())
  else:
    print('Failed:', response.status_code, response.text) 


    





`,
  r: `cat("Hello world\n")`,
  ruby: `
    require 'uri'
    require 'net/http'
    require 'openssl'
    
    url = URI("https://api.armur.ai/go/apiaudit/audit/create?data=Vulnerability")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Post.new(url)
    request["Authorization"] = 'Bearer your_api_key_here'
    form_data = [['content', 'content_to_send'], ['token', '100'], ['temperature', '0.4']]
    request.set_form form_data, 'multipart/form-data'
    
    response = http.request(request)
    puts response.read_body
    `,
  rust: `
    use reqwest::blocking::Client;
    use std::collections::HashMap;
    
    fn main() -> Result<(), Box<dyn std::error::Error>> {
        let client = Client::new();
        let mut form_data = HashMap::new();
        form_data.insert("content", "content_to_send");
        form_data.insert("token", "100");
        form_data.insert("temperature", "0.4");
    
        let res = client.post("https://api.armur.ai/go/apiaudit/audit/create?data=Vulnerability")
            .bearer_auth("your_api_key_here")
            .form(&form_data)
            .send()?;
    
        println!("Status: {}", res.status());
        println!("Headers:n{:#?}", res.headers());
        Ok(())
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
