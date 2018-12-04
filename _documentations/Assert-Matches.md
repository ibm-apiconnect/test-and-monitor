---
layout: docs
title: Assert Matches
description: Assert Matches
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-matches
type: document
order: 2
parent: assertion-components
---

Asserts that the value of the element identified by a given expression matches a specified format.

<style type="text/css">
.docsTable  {border-collapse:collapse;border-spacing:0;}
.docsTable td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.docsTable th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.docsTable .docsTableBorder{border-color:inherit;text-align:left}
<!-- @media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}} --></style>

## Parameters
<div class="docsTable-wrap"><table class="docsTable">
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Required? </th>
    <th> Description </th>
    <th> Default Value </th>
 <tr>
 <tr>
    <td> Expression </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the element that you want to examine; for example, `payload.productId`.</td>
    <td></td>
  </tr>
  <tr>
    <td> Type </td>
    <td> Selection list </td>
    <td> Yes </td>
    <td> Select one of the following values:
      <ul>
        <li><code>regex</code>: Evaluate the element value as a regular expression, as specified in the <b>Regex value</b> parameter.</li>
        <li><code>US states</code>: Check if the element value is a valid US State; for example, ‘NY’.</li>
        <li><code>US zipcodes</code>: Check if the element value is a valid US Zipcode.</li>
        <li><code>credit card</code>: Check if the element value contains a valid credit card number from the most popular credit cards.</li>
        <li><code>country codes</code>: Checks if the element value contains a valid country code.</li>
        <li><code>currency codes</code>: Checks if the element value is a valid currency code.</li>
      </ul>
    </td>
    <td> Regex </td>
  </tr>
  <tr>
    <td> Regex value </td>
    <td> String </td>
    <td> Yes, if value of the <b>Type</b> parameter is <code>regex</code> </td>
    <td> Specify the regular expression you want to use for checking the expression. </td>
    <td></td>
  </tr>
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
  
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_execute_if_item_exists.md %}
   
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
<!-- </table></div> -->
