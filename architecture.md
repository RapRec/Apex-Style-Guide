---
layout: default
title: Apex Architecture
tagline: Architecting Salesforce together
---

- [Architecture](#architecture)
  - [Goals](#goals)
  - [Sources](#sources)
- [Patterns of Enterprise Application Architecture (P of EAA)](#peaa)
  - [Service Layer](#fowler-service-layer)
  - [Domain Model Layer](#fowler-domain-layer)
  - [Unit of Work Layer](#fowler-uwo-layer)
  - [Data Mapper Layer](#fowler-data-mapper-layer)
- [FinancialForce Apex Common (fflib)](#apex-common)
  - [Service Layer](#fawcett-service-layer)
  - [Domain Model Layer](#fawcett-domain-layer)
  - [Unit of Work Layer](#fawcett-uwo-layer)
  - [Data Mapper Layer](#fawcett-selector-layer)
- [Outline of Implementation](#outline)
- [Summary](#summary)

<a name="architecture"></a>

# Architecture

Force.com (APEX) development within the Salesforce platform can be difficult to navigate through with its governing limits, limitations of the APEX language itself, and even just the complexity of the multifacited tool that Salesforce is to a business. For this reason careful planning and design are important to growing business processes. This document outlines the underlying architecture and thought behind the codebase within the Rapid Recovery Salesforce org.

<a name="peaa"></a>

## Patterns of Enterprise Application Architecture (P of EAA)

[Martin Fowler](https://martinfowler.com/) is a "author, speaker, and loud-mouth on the design of enterprise software". His book is "Patterns of Enterprise Application Architecture", and his work, aka **PEAA**, is cited throughout many developer communities as a standard for implementing Separation of Concerns (SOC). His PEAA breaks down to the following 4 layer architecture:

<a name="fowler-service-layer"></a>

#### Service Layer
*Defines an application's boundary with a layer of services that establishes a set of available operations and coordinates the application's response in each operation. [More](https://martinfowler.com/eaaCatalog/serviceLayer.html)*

<a name="fowler-domain-layer"></a>

#### Domain Layer
*An object model of the domain that incorporates both behavior and data. [More](https://martinfowler.com/eaaCatalog/domainModel.html)*

<a name="fowler-uow-layer"></a>

#### Unit of Work
*Maintains a list of objects affected by a business transaction and coordinates the writing out of changes and the resolution of concurrency problems. [More](https://www.martinfowler.com/eaaCatalog/unitOfWork.html)*

<a name="fowler-data-mapper-layer"></a>

#### Data Mapper
*A layer of Mappers (473) that moves data between objects and a database while keeping them independent of each other and the mapper itself. [More](https://martinfowler.com/eaaCatalog/dataMapper.html)*

<a name="apex-common"></a>

## FinancialForce Apex Common (fflib)

[Andrew Fawcett[http://salesforce.stackexchange.com/users/286/andrew-fawcett] a.k.a. [@AndyInTheCloud](https://twitter.com/andyinthecloud) is the CTO of FinancialForce as well as a Salesforce MVP who since Dreamforce 2012 has made a huge influence in integrating the ideals presented from Fowler. Unfortunately Force.com development does not align 100% with Fowler's ideas, but Fawcett's [Apex Common repository (fflib)](https://github.com/financialforcedev/fflib-apex-common) represents the [best current example to date within the Salesforce community](http://salesforce.stackexchange.com/questions/156522/patterns-of-enterprise-application-architecture-peaa-for-apex), his only diversion would be resolving the Data Mapper layer through Salesforce's `SObject` and instead implementing a Selector Layer.

The 4 layer application implemented in this library represents the approach within the Rapid Recovery APEX code base. They are as follows:

<a name="fawcett-service-layer"></a>

#### Service Layer
*Defines an applications boundary and its set of available operations from the perspective of the interfacing client layers. It encapsulates the applications business logic, controlling transactions and coordinating response in the implementation of its operations. [More](https://developer.salesforce.com/page/Apex_Enterprise_Patterns_-_Service_Layer)*

<a name="fawcett-domain-layer"></a>

#### Domain Layer
*At its worst business logic can be very complex. Rules and logic describe many different cases and slants of behavior, and it's this complexity that objects were designed to work with. A Domain Model creates a web of interconnected objects,where each object represents some meaningful individual, whether as large as a corporation or as small as a single line on an order form. [More](https://developer.salesforce.com/page/Apex_Enterprise_Patterns_-_Domain_Layer)*

<a name="fawcett-uow-layer"></a>

#### Unit of Work Layer
*Maintains a list of object affected by a business transaction and coordinates the writing out of changes and the resolution of concurrency problems. [More](https://andyinthecloud.com/2013/06/09/managing-your-dml-and-transactions-with-a-unit-of-work/)*

<a name="fawcett-selector-layer"></a>

#### Selector Layer
*Layer that encapsulates logic responsible for querying information from your custom objects and feeding it into your Domain and Service layer code as well as Batch Apex jobs. [More](https://developer.salesforce.com/page/Apex_Enterprise_Patterns_-_Selector_Layer)*

<a name="outline"></a>

## Outline of Implementation

An *"Outline of Implementation"* will be added to document the specifics of these structures within the [RapRec Salesforce repository](https://bitbucket.org/raprec/salesforce).

<a name="summary"></a>

## Summary

At the moment the APEX Common library is being implemented in upcoming projects and aimed to being fully refactored into the current repository by **Q4 of 2017**.
