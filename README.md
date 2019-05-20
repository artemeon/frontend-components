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
  <Checkbox v-bind="data_object" />
  <Radio v-bind="data_object" />
  <TextField v-bind="data_object" />
  <TextArea v-bind="data_object" />
</template>
```

**You can bind an object with props or you can specify the props separately**

|  Props   |                  Definition                   |
| :------: | :-------------------------------------------: |
|    id    |                  Unique key                   |
|   name   |  By checkboxes and radio buttons required !   |
|  value   | this will be the default value of the element |
|  values  |    Values for select, checkboxes or radio     |
| readonly |                 Default false                 |
| disabled |                 Default false                 |
|  Label   |               Label for element               |

| Events |             Definition              |  Binding   |
| :----: | :---------------------------------: | :--------: |
| input  | value will be automatically updated | no binding |

### Table

#### Usage

```vue
<template>
  <Table>
    <TableHead>
      <TableCell></TableCell>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

| Props  |         Definition          |
| :----: | :-------------------------: |
| styles | Object, adds inline styling |

### ASwitch

#### Usage

```vue
<template>
  <ASwitch
    styles="stylesObject"
    left="left option"
    right="right option"
    @change="handleChange"
  />
</template>
```

```javascript
handleChange(e){
  /**
   * Code here
   * /
}
```

| Props  |                Definition                |
| :----: | :--------------------------------------: |
| styles |    Styles Object, adds inline styling    |
|  left  | Left option of the Switch. Type: String  |
| right  | right option of the Switch. Type: String |

| Events |                                      Definition                                       |         Binding         |
| :----: | :-----------------------------------------------------------------------------------: | :---------------------: |
| change | returns false when left option is selected and true when the right option is selected | @change="function-name" |

### Button

#### Usage

```vue
<template>
  <Button styles="stylesObject" @click="handleClick">
    <i></i>
    Click Me
  </Button>
</template>
```

```javascript
handleClick(){
  /**
   * Code here
   * /
}
```

| Props  |             Definition             |
| :----: | :--------------------------------: |
| styles | Styles Object, adds inline styling |

| Events |         Definition          |         Binding         |
| :----: | :-------------------------: | :---------------------: |
| click  | Normal button click handler | @click ="function-name" |
