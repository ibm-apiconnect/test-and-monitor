---
layout: docs
title: Assert Compares
description: Assert Compares
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-compares
type: document
order: 2
parent: assertion-components
---

Asserts that two elements are equivalent in some way.

<style type="text/css"> .docsTable {border-collapse:collapse;border-spacing:0;} .docsTable td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;} .docsTable th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;} .docsTable .docsTableBorder{border-color:inherit;text-align:left} </style> 

# Parameters
<div class="docsTable-wrap"><table class="docsTable">
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Required? </th>
    <th> Description </th>
    <th> Default Value </th>
  </tr>
  <tr>
    <td> Expression 1 </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the first element for comparison; for example, `payload1.productId`. </td>
    <td></td>
  </tr>
  <tr>
    <td> Expression 2 </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the second element for comparison; for example, `payload2.productId`. </td>
    <td></td>
  </tr>
  <tr>
    <td> Mode </td>
    <td> Selection list </td>
    <td> Yes </td>
    <td> Select one of the following values:
      <ul>
        <li> <code>text</code>: compare the text of the two elements as plain text.</li>
        <li> <code>values</code>: compare the two elements regardless of their text layout.</li>
        <li> <code>structure</code>: compare only the structure of the two elements.</li>
      </ul>
    </td>
    <td>Text</td>
  </tr>
  
   {% include assertion_param_level.md %}
  
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %} 
</table></div>
