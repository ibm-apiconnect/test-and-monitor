---
layout: docs
title: Assert Exists
description: Assert Exists
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-exists
type: document
order: 2
parent: assertion-components
---

Asserts that the value of the element identified by a given expression exists. The presence of the element, even if it is empty, is enough to consider it a valid assertion.

<style type="text/css">
.docsTable  {border-collapse:collapse;border-spacing:0;}
.docsTable td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.docsTable th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.docsTable .docsTableBorder{border-color:inherit;text-align:left}
<!-- @media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}} --></style>

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
    <td> Expression </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the element to be checked for existence; for example, `payload.productId`. </td>
    <td></td>
  </tr>
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
  
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
</table></div>
