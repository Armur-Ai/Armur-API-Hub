"use client";
import React, { useState } from "react";
import { CopyBlock, anOldHope } from "react-code-blocks";
import { codeSamples } from "./codeBlocks";

const ExampleResponses = () => {
  // const [language, changeLanguage] = useState("javascript");
  // const [languageDemo, changeDemo] = useState<any>(
  //   Object.values(codeSamples)[4]
  // );
  // const [lineNumbers, toggleLineNumbers] = useState(false);
  const exampleResponse = [
    {
      data: {
        _id: "b4f601b8-f60c-44a5-96b1-29bcb546732f",
        name: 'package controllers\n\nimport (\n\t"bytes"\n\t"go-armur-backend/api/helpers"\n\t"go-armur-backend/api/models"\n\t"go-armur-backend/api/services"\n\t"net/http"\n\t"strconv"\n\t"strings"\n\t"time"\n\n\t"github.com/gofiber/fiber/v2"\n\t"github.com/google/uuid"\n)\n\ntype AuditController interface {\n\tGetAllAudit(c *fiber.Ctx) error\n\tSearchAudit(c *fiber.Ctx) error\n\tGetAuditCount(c *fiber.Ctx) error\n\tGetAuditCountByMonth(c *fiber.Ctx) error\n\tGetAudit(c *fiber.Ctx) error\n\tGetAuditPDF(c *fiber.Ctx) error\n\tUploadFile(c *fiber.Ctx) error\n\tCreateFullAudit(c *fiber.Ctx) error\n\tCommonIssues(c *fiber.Ctx) error\n}\n\ntype auditController struct {\n\tauditService services.AuditService\n\tfileService  services.FileService\n}\n\nfunc NewAuditController(auditService services.AuditService, fileService services.FileService) AuditController {\n\treturn &auditController{\n\t\tauditService: auditService,\n\t\tfileService:  fileService,\n\t}\n}\n\nfunc (audit *auditController) GetAllAudit(c *fiber.Ctx) error {\n\tpageVal, _ := strconv.Atoi(c.Query("page", "1"))\n\tlimitVal, _ := strconv.Atoi(c.Query("limit", "10"))\n\tif pageVal < 1 {\n\t\tpageVal = 1\n\t}\n\tif limitVal < 1 {\n\t\tlimitVal = 10\n\t}\n\tvar page int64 = int64(pageVal)\n\tvar limit int64 = int64(limitVal)\n\n\taudits, err := audit.auditService.GetAllAudits(page, limit, c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(fiber.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err))\n\t}\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse(audits))\n}\n\nfunc (audit *auditController) SearchAudit(c *fiber.Ctx) error {\n\tname := c.Query("name", "")\n\n\taudits, err := audit.auditService.SearchAudit(c.Locals("workspaceId").(string), name)\n\tif err != nil {\n\t\treturn c.Status(fiber.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err))\n\t}\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse(audits))\n}\n\nfunc (audit *auditController) GetAuditCount(c *fiber.Ctx) error {\n\taudits, err := audit.auditService.GetAllAuditsByWorkspaceId(c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(fiber.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err))\n\t}\n\n\tauditCount := len(audits)\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse(auditCount))\n}\n\n\nfunc (audit *auditController) GetAuditCountByMonth(c *fiber.Ctx) error {\n\tyear := c.Query("year", strconv.Itoa(time.Now().Year()))\n\n\taudits, err := audit.auditService.GetAllAuditsByWorkspaceId(c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(fiber.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err))\n\t}\n\n\tauditCountByMonthByWorkspace := []int{\n\t\t0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n\t}\n\n\tauditCountByMonthByUser := []int{\n\t\t0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n\t}\n\n\t// make sure the year is also the current year\n\tfor _, audit := range audits {\n\t\tmonth := helpers.GetIntValueForMonths(audit.CreatedAt.Month().String())\n\t\tcreatedYear := audit.CreatedAt.Year()\n\t\tif year == strconv.Itoa(createdYear) {\n\t\t\tauditCountByMonthByWorkspace[month] = auditCountByMonthByWorkspace[month] + 1\n\t\t\tif audit.UserId == c.Locals("userId").(string) {\n\t\t\t\tauditCountByMonthByUser[month] = auditCountByMonthByUser[month] + 1\n\t\t\t}\n\t\t}\n\t}\n\n\tauditCountData := map[string][]int{\n\t\t"workspace": auditCountByMonthByWorkspace,\n\t\t"user":      auditCountByMonthByUser,\n\t}\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse(auditCountData))\n}\n\nfunc (audit *auditController) GetAudit(c *fiber.Ctx) error {\n\tid, err := uuid.Parse(c.Params("audit_id"))\n\tif err != nil {\n\t\treturn c.Status(http.StatusBadRequest).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\tresult, err := audit.auditService.GetAuditById(id, c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\treturn c.Status(http.StatusOK).JSON(helpers.EncodeSuccessResponse(result))\n}\n\nfunc (audit *auditController) GetAuditPDF(c *fiber.Ctx) error {\n\tid, err := uuid.Parse(c.Params("audit_id"))\n\tif err != nil {\n\t\treturn c.Status(http.StatusBadRequest).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\tresult, err := audit.auditService.GetAuditById(id, c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\t// Add Page\n\thtmlCode := "<!DOCTYPE html><html lang=\\"en\\"><head> <meta charset=\\"UTF-8\\"> <meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"> <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\"> <title>Document</title> <style> a { text-decoration: none; color: inherit;}body { page-break-after: always;margin:50px !important; margin-top: 100px; background-color: #1e1e2f; color: #fff; font-family: \\"Satoshi\\", sans-serif;}tr { background-color: #1e1e2f; color: #fff;}td { padding: 10px; border: 1px solid white; border-top: transparent; border-left: transparent; border-bottom: transparent;}code { background-color: black; color: #fff; padding: 0.5rem; border-radius: 0.5rem;}h1 { font-size: 2rem; font-weight: 600; margin-bottom: 1rem;}h2 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem;}h3 { font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;}h4 { font-size: 1rem; font-weight: 600; margin-bottom: 1rem;}h5 { font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;}h6 { font-size: 0.75rem; font-weight: 600; margin-bottom: 1rem;}ul { list-style-type: disc;}li { margin-bottom: 0.5rem;}pre { background: transparent !important;;} </style></head><body>" + *result.Documentation + "<br><br>" + *result.Audit + "<br><br>" + *result.Codefix + *result.Optimization + "<br><br>" + *result.TestCase + "</body></html>"\n\tpdfName := "./pdfs/" + id.String() + ".pdf"\n\n\t_, err = helpers.GeneratePDF(pdfName, htmlCode)\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\tc.Set("Content-Type", "application/octet-stream")\n\tc.Attachment(pdfName, result.Name+"-audit-report.pdf")\n\treturn nil\n}\n\nfunc (audit *auditController) UploadFile(c *fiber.Ctx) error {\n\n\tid := uuid.New()\n\tcontent := c.FormValue("content")\n\n\tresult, err := audit.auditService.SaveAudit(id, content, c.Locals("workspaceId").(string), c.Locals("userId").(string))\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\treturn c.Status(http.StatusOK).JSON(helpers.EncodeSuccessResponse(result))\n}\n\nfunc (audit *auditController) CreateFullAudit(c *fiber.Ctx) error {\n\tid, err := uuid.Parse(c.Params("audit_id"))\n\tif err != nil {\n\t\treturn c.Status(http.StatusBadRequest).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\tauditObject, err := audit.auditService.GetAuditById(id, c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\t// create the file url\n\tnewSolFileName := strings.Join([]string{id.String(), auditObject.Name}, "-")\n\trawBody, err := audit.fileService.DownloadFile(c.Locals("workspaceId").(string), newSolFileName)\n\n\tbuf := new(bytes.Buffer)\n\tbuf.ReadFrom(rawBody)\n\tfileContentAsString := buf.String()\n\n\t_, err = audit.auditService.CreateFullAuditById(id, c.Locals("workspaceId").(string), fileContentAsString)\n\tif err != nil {\n\t\treturn c.Status(http.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err.Error()))\n\t}\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse("Audit documentation created successfully."))\n}\n\nfunc (audit *auditController) CommonIssues(c *fiber.Ctx) error {\n\taudits, err := audit.auditService.GetAllAuditsByWorkspaceId(c.Locals("workspaceId").(string))\n\tif err != nil {\n\t\treturn c.Status(fiber.StatusInternalServerError).JSON(helpers.EncodeErrorResponse(err))\n\t}\n\n\t// get the common issues from the topVulnerabilities\n\tcommonIssues := make(map[string]int)\n\tfor _, audit := range audits {\n\t\tif audit.TopVulnerabilities != nil {\n\t\t\tissues := strings.Split(*audit.TopVulnerabilities, ",")\n\t\t\tfor _, issue := range issues {\n\t\t\t\tissue = strings.TrimSpace(issue)\n\t\t\t\tif issue != "" {\n\t\t\t\t\tcommonIssues[issue] = commonIssues[issue] + 1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tvar issues models.CommonIssuesResponse\n\n\tfor key, value := range commonIssues {\n\t\tissues.CommonIssues = append(issues.CommonIssues, models.Issue{\n\t\t\tName:  key,\n\t\t\tCount: value,\n\t\t})\n\t}\n\n\treturn c.Status(fiber.StatusOK).JSON(helpers.EncodeSuccessResponse(issues))\n}\n',
        description: null,
        userId: "4c69e88d-888d-4f3b-b4f9-e88972bd8ccd",
        language: "golang",
        vulnerability:
          "### List of Bugs, Minor Vulnerabilities, and Issues\n\n1. **Potential security vulnerability:**\n   - In the `GetAllAudit` function, the `pageVal` and `limitVal` variables are retrieved from query parameters without proper input validation and sanitization. This could potentially lead to a security vulnerability such as a SQL injection attack.\n   - In the `SearchAudit` function, the `name` variable is retrieved from a query parameter without input validation and sanitization. This can also lead to a potential security vulnerability.\n\n2. **Code quality improvements:**\n   - In the `GetAllAudit` function, the variable assignments for `pageVal` and `limitVal` can be simplified using the `defaultInt` helper function to avoid checking for negative values.\n   - In the `GetAllAudit` function, the type conversions for `pageVal` and `limitVal` can be simplified using the `strconv.ParseInt` function instead of `strconv.Atoi`.\n   - In the `SearchAudit` function, the variable assignment for `name` can be simplified by directly fetching the query parameter value using the `c.Query` function.\n   - In the `GetAuditCountByMonth` function, the variable assignment for `year` can be simplified by directly fetching the query parameter value using the `c.Query` function.\n\n3. **Code consistency improvements:**\n   - The struct tags for the `AuditController` interface methods should be aligned for better readability.\n\n4. **Redundant type conversion:**\n   - In the `GetAuditCountByMonth` function, the `year` variable is already a string and does not need to be converted to a string again using `strconv.Itoa`.\n\n5. **Incorrect usage of pointers:**\n   - In the `GetAuditPDF` function, the `result.Documentation`, `result.Audit`, `result.Codefix`, and `result.TestCase` variables are already pointers and should not be dereferenced using `*`.\n\n6. **Missing error handling:**\n   - In the `GetAuditPDF` function, the error returned by `helpers.GeneratePDF` is not being handled. Proper error handling should be implemented in case there is an error generating the PDF.\n\n7. **Insecure file handling:**\n   - In the `GetAuditPDF` function, the generated PDF file is saved in the `pdfs` directory using the `pdfName` variable. It is important to ensure that the directory is secure and inaccessible to unauthorized users to prevent any potential security vulnerabilities.\n\n8. **Insecure file download:**\n   - In the `CreateFullAudit` function, the `rawBody` variable, which contains the file content, is being directly downloaded from the file service without any validation or authorization checks. Proper validation and authorization checks should be implemented to ensure secure file downloading.\n\n9. **Code duplication:**\n   - The code for retrieving audit count by month (`GetAuditCountByMonth`) and common issues (`CommonIssues`) from the `audits` variable is duplicated. The common logic for retrieving these values can be abstracted into a helper function to reduce code duplication.\n\nThese are the bugs, vulnerabilities, and issues found in the given Go code.",
        isApi: true,
        created_at: "2023-11-27T07:29:55.184Z",
        updated_at: "2023-11-27T07:29:55.184Z",
      },
    },
  ];

  // export const statuses = [
  //   {
  //     id: 1,
  //     description: "In Queue",
  //   },
  //   {
  //     id: 2,
  //     description: "Processing",
  //   },
  //   {
  //     id: 3,
  //     description: "Accepted",
  //   },
  //   {
  //     id: 4,
  //     description: "Wrong Answer",
  //   },
  //   {
  //     id: 5,
  //     description: "Time Limit Exceeded",
  //   },
  //   {
  //     id: 6,
  //     description: "Compilation Error",
  //   },
  //   {
  //     id: 7,
  //     description: "Runtime Error (SIGSEGV)",
  //   },
  //   {
  //     id: 8,
  //     description: "Runtime Error (SIGXFSZ)",
  //   },
  //   {
  //     id: 9,
  //     description: "Runtime Error (SIGFPE)",
  //   },
  //   {
  //     id: 10,
  //     description: "Runtime Error (SIGABRT)",
  //   },
  //   {
  //     id: 11,
  //     description: "Runtime Error (NZEC)",
  //   },
  //   {
  //     id: 12,
  //     description: "Runtime Error (Other)",
  //   },
  //   {
  //     id: 13,
  //     description: "Internal Error",
  //   },
  //   {
  //     id: 14,
  //     description: "Exec Format Error",
  //   },
  // ];

  return (
    <div className="codeTab-block">
      <div className="h-full custom-border p-3">
        <pre
          // style={{ lineHeight: "24px" }}
          className="px-2 text-base h-[100%] leading-6  py-1 font-normal text-md text-green-500 w-full overflow-x-auto"
        >
          {/* {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null} */}
          {/* `${atob(data)}` */}
          {/* {atob(data)} */}
          {JSON.stringify(exampleResponse, null, 2)}
        </pre>

        {/* <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={anOldHope}
          wrapLongLines
          codeBlock
          customStyle={{ height: "100%" }}
        /> */}
      </div>
    </div>
  );
};

export default ExampleResponses;
