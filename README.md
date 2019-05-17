# vue-library

## Installation

```
npm i --save @artemeon/vue-library
```

## Usage

### In main.js file:

```javascript
import @artemeon/vue-library
```

```vue
<template>
  <component-name props />
</template>
```

## Available components:

### Card

#### Usage

```vue
<template>
  <Card
    :title="title - variable"
    :styles="styles object"
    @handleClick="function"
  />
</template>
```

| Props  |           Definition            |
| :----: | :-----------------------------: |
| title  | Title that will be shawn on top |
| styles | Object to override css styling  |

|   Events    |                   Definition                   |              Binding              |
| :---------: | :--------------------------------------------: | :-------------------------------: |
| handleClick | Event that will be fired, when Card is clicked | @handleClick="your-function-name" |

### Form Components

#### Usage

```vue
<template>
  <Checkbox v-bind="data - object" />
  <Radio v-bind="data - object" />
  < TextField v-bind="data-object"/>
  <TextArea v-bind="data - object" />
</template>
```

**You can bind an object with props or you can specify the props separately**
| Props | Definition |
| :--------: | :---------------------------------------------: |
| id | Unique key |
| name | By checkboxes and radio buttons required ! |
| value | this will be the default value of the element |
| values | Values for select, checkboxes or radio |
| readonly | Default false |
| disabled | Default false |
| Label | Label for element |

| Events |             Definition              |  Binding   |
| :----: | :---------------------------------: | :--------: |
| input  | value will be automatically updated | no binding |
