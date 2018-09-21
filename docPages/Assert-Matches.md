---
layout: document
title: Assert Matches
description: Assert Matches
keywords: getting started, install, setup, command line, import, pipeline, update, samples, help
duration: 1 minute
permalink: assert-matches
type: document
---

Asserts that the value of the element identified by a given expression matches a specified format.

## Parameters

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Required? </th>
    <th> Description </th>
  </tr>
  <tr>
    <td> Expression </td>
    <td> Expression </td>
    <td> Yes </td>
    <td> Path to the element that you want to examine; for example, `payload.productId`.</td>
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
  </tr>
  <tr>
    <td> Regex value </td>
    <td> String </td>
    <td> Yes, if value of the <b>Type</b> parameter is <code>regex</code> </td>
    <td> Specify the regular expression you want to use for checking the expression. </td>
  </tr>
  
  {% include assertion_param_mode_all_one.md %}
  
  {% include assertion_param_level.md %}  
  
  {% include assertion_param_modifier.md %}
  
  {% include assertion_param_execute_if_item_exists.md %}
   
  {% include assertion_param_stop_test_if_fails.md %}
  
  {% include assertion_param_comment.md %}
  
</table>
