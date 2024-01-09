"use client";
import { message } from "antd";
import { useEffect, useState } from "react";
import { CopyBlock, a11yLight, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocksTwo";
import "./codeEditor.scss";

const chainOptions = [
  { value: "javascript", label: "Node Js" },
  { value: "go", label: "Golang" },
  { value: "rust", label: "Rust" },
  { value: "python", label: "Python" },
  { value: "ruby", label: "Ruby" },
];

const AdvanceApiCodeEditor = () => {
  const [language, changeLanguage] = useState("python");
  const [languageDemo, changeDemo] = useState<any>(
    Object.values(codeSamples)[5]
  );
  const [lineNumbers, toggleLineNumbers] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("dark");

  //   useEffect(() => {
  //     var elements = document.getElementsByClassName("code-block-container-two");
  //     var codeBlockMainClass = elements[0].childNodes;
  //     for (var i = 0; i < codeBlockMainClass.length; i++) {
  //       codeBlockMainClass[i].classList.remove("custom-class-light");
  //       codeBlockMainClass[i].classList.add("custom-class-dark");
  //     }
  //   }, []);

  // const { register, handleSubmit, watch, control, formState } = useForm({
  //   // resolver: yupResolver(AddMemberSchema),
  //   defaultValues: {
  //     language: "jsx",
  //   },
  // });

  // const watchf = watch();

  // useEffect(() => {
  //   console.log("watchf", watchf);
  //   if (watchf.language) {
  //     changeDemo(codeSamples[watchf.language]);
  //     changeLanguage(watchf.language);
  //   }
  // }, [watchf]);

  //      const customStyle = {
  //     backgroundColor: 'black',
  //     color: 'white',
  //     padding: '10px',
  //     borderRadius: '5px',
  //     overflowX: 'auto',
  //   };

  // const copyCodeHandler = () => {
  //   navigator.clipboard
  //     .writeText(codeSamples[language])
  //     .then(() => {
  //       message.success("Code copied successfully");
  //     })
  //     .catch((error) => {
  //       message.error("Failed to copy code");
  //     });
  // };

  const onTabClickHandler = (data: any) => {
    changeLanguage(data.value);
    // changeDemo(codeSamples[data.value]);
  };

  const themeChangeHadnler = async (label: any) => {
    if (label === "light") {
      await setSelectedTheme(label);
      var elements = document.getElementsByClassName(
        "code-block-container-two"
      );
      //   var codeBlockMainClass = elements[0].childNodes;
      //   for (var i = 0; i < codeBlockMainClass.length; i++) {
      //     codeBlockMainClass[i].classList.remove("custom-class-dark");
      //     codeBlockMainClass[i].classList.remove("custom-class-light-blue");
      //     codeBlockMainClass[i].classList.add("custom-class-light");
      //   }
    } else if (label === "light-blue") {
      await setSelectedTheme(label);
      var elements = document.getElementsByClassName(
        "code-block-container-two"
      );
      //   var codeBlockMainClass = elements[0].childNodes;
      //   for (var i = 0; i < codeBlockMainClass.length; i++) {
      //     codeBlockMainClass[i].classList.remove("custom-class-dark");
      //     codeBlockMainClass[i].classList.remove("custom-class-light");
      //     codeBlockMainClass[i].classList.add("custom-class-light-blue");
      //   }
    } else {
      await setSelectedTheme(label);
      var elements = document.getElementsByClassName(
        "code-block-container-two"
      );
      //   var codeBlockMainClass = elements[0].childNodes;
      //   for (var i = 0; i < codeBlockMainClass.length; i++) {
      //     codeBlockMainClass[i].classList.remove("custom-class-light");
      //     codeBlockMainClass[i].classList.remove("custom-class-light-blue");
      //     codeBlockMainClass[i].classList.add("custom-class-dark");
      //   }
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(languageDemo)
      .then(() => {
        message.success("Code copied successfully");
      })
      .catch((error) => {
        message.error("Failed to copy code");
      });
  };

  return (
    <div className="mt-5 p-4 code-block-container-two">
      <div className="language-tabs-container flex items-center justify-between">
        <div className="flex language_buttons w-10/12  items-center">
          {chainOptions?.map((data, index) => {
            return (
              <button
                key={index}
                onClick={() => onTabClickHandler(data)}
                className={`font-inter text-sm px-6 py-3 ${
                  language === data?.label ? "bg-[#000000]" : ""
                }`}
              >
                {data.label}
              </button>
            );
          })}
        </div>
        <div className="flex ml-4 w-2/12">
          <div
            // onClick={() => themeChangeHadnler("dark")}
            className={
              selectedTheme === "dark"
                ? "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#81D4FA]"
                : "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#81D4FA]"
            }
          ></div>
          <div
            // onClick={() => themeChangeHadnler("light")}
            className={
              selectedTheme === "light"
                ? "hover:cursor-pointer border-[1px] border-white rounded-full w-6 h-6 mr-4 bg-[#252463]"
                : "hover:cursor-pointer border-[1px] border-white rounded-full w-6 h-6 mr-4 bg-[#252463]"
            }
          ></div>
          <div
            // onClick={() => themeChangeHadnler("light")}
            className={
              selectedTheme === "light"
                ? "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#82D995]"
                : "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#82D995]"
            }
          ></div>
          <div
            // onClick={() => themeChangeHadnler("light-blue")}
            className={
              selectedTheme === "light-blue"
                ? "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#D28888]"
                : "hover:cursor-pointer rounded-full w-6 h-6 mr-4 bg-[#D28888]"
            }
          ></div>
        </div>

        {/* <div className="w-2/12 flex justify-center">
          <CopyOutlined
            onClick={handleCopy}
            className="hover:cursor-pointer hover:text-[#4658ff]"
            style={{ fontSize: "22px", zIndex: "999999" }}
          />
        </div> */}
      </div>
      <div>
        <CopyBlock
          //   className="code-block-two-custom-class"
          language={language}
          text={languageDemo}
          showLineNumbers={true}
          theme={selectedTheme === "dark" ? anOldHope : a11yLight}
          // theme={a11yLight}
          wrapLongLines={true}
          codeBlock
          //   style={{
          // fontFamily:
          //   "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          //   }}
        />
      </div>
    </div>
  );
};

export default AdvanceApiCodeEditor;
