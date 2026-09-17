window.STAGE_LESSON = {
  id: "stage-7",
  title: "Stage 7 — Object-Oriented Python",
  intro: "Object-oriented programming groups data and the functions that operate on it into a single unit — a class. It's how most larger Python codebases are structured.",
  topics: [
    {
      title: "Classes, objects, attributes, and methods",
      explanation: `
        <p>A <strong>class</strong> is a blueprint; an <strong>object</strong> (or instance) is a specific thing built from that blueprint. <strong>Attributes</strong> are the data an object holds; <strong>methods</strong> are functions defined inside the class that operate on that data.</p>
      `,
      example: `class Dog:\n    def bark(self):\n        print("Woof!")\n\nd = Dog()\nd.bark()`,
      exercise: {
        prompt: "Define a class Cat with a method meow() that prints \"Meow!\". Create an instance and call meow().",
        starter: `# Your code here\n`,
        expectedOutput: "Meow!"
      }
    },
    {
      title: "__init__ and instance vs class attributes",
      explanation: `
        <p><code>__init__</code> runs automatically when a new object is created, and is where you typically set up its starting attributes. An <strong>instance attribute</strong> (like <code>self.color</code>) belongs to one specific object; a <strong>class attribute</strong> is shared across every instance unless a particular instance overrides it.</p>
      `,
      example: `class Car:\n    wheels = 4  # class attribute\n    def __init__(self, color):\n        self.color = color  # instance attribute\n\nc = Car("red")\nprint(c.color, c.wheels)`,
      exercise: {
        prompt: "Define a class Person with __init__(self, name) that stores self.name. Create a Person named \"Kai\" and print its name.",
        starter: `# Your code here\n`,
        expectedOutput: "Kai"
      }
    },
    {
      title: "Inheritance and method overriding",
      explanation: `
        <p>A subclass — <code>class Dog(Animal):</code> — inherits the attributes and methods of its parent class. It can <strong>override</strong> a method by simply redefining it with the same name; Python uses the subclass's version when called on a subclass instance.</p>
      `,
      example: `class Animal:\n    def speak(self):\n        print("Some sound")\n\nclass Dog(Animal):\n    def speak(self):\n        print("Woof!")\n\nDog().speak()`,
      exercise: {
        prompt: "Define class Animal with a method speak() that prints \"...\". Define class Cat(Animal) that overrides speak() to print \"Meow!\". Create a Cat and call speak().",
        starter: `# Your code here\n`,
        expectedOutput: "Meow!"
      }
    },
    {
      title: "Encapsulation and property decorators",
      explanation: `
        <p>Python uses a leading underscore (<code>self._radius</code>) as a convention marking an attribute as "internal" — it's not actually enforced, just a signal to other developers. <code>@property</code> lets a method be accessed like a plain attribute (no parentheses), which is handy for computed values.</p>
      `,
      example: `class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n\nc = Circle(2)\nprint(c.area)`,
      exercise: {
        prompt: "Define class Square with __init__(self, side) storing self._side, and a property perimeter returning self._side * 4. Create Square(5) and print its perimeter.",
        starter: `# Your code here\n`,
        expectedOutput: "20"
      }
    },
    {
      title: "Dunder (magic) methods: __str__, __repr__, __eq__",
      explanation: `
        <p>"Dunder" (double-underscore) methods let your objects work with Python's built-in functions and operators. <code>__str__</code> controls what <code>print()</code> shows; <code>__repr__</code> is the more technical, developer-facing representation; <code>__eq__</code> defines what <code>==</code> means between two of your objects.</p>
      `,
      example: `class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\nprint(Point(1, 2))`,
      exercise: {
        prompt: "Define class Point with __init__(self, x, y) and __str__ returning f\"({x}, {y})\". Create Point(3, 4) and print it.",
        starter: `# Your code here\n`,
        expectedOutput: "(3, 4)"
      }
    },
    {
      title: "Composition vs inheritance",
      explanation: `
        <p>Inheritance models an <strong>"is-a"</strong> relationship (a Dog <em>is an</em> Animal). <strong>Composition</strong> models a <strong>"has-a"</strong> relationship — building a class out of other objects rather than subclassing (a Car <em>has an</em> Engine). Composition is often preferred in practice because it's more flexible and avoids deep, brittle inheritance chains.</p>
        <p>This is a design judgment call rather than a syntax rule, so there's no runnable exercise here.</p>
      `
    }
  ],
  quiz: [
    {
      question: "What does __init__ do?",
      choices: ["Deletes an object", "Runs automatically when a new instance is created, to set up its initial state", "Defines a class attribute only", "Must be called manually every time"],
      correctIndex: 1,
      explanation: "__init__ is Python's constructor method — it runs automatically right after an object is created."
    },
    {
      question: "If class Cat(Animal) overrides a method from Animal, calling that method on a Cat instance uses:",
      choices: ["Animal's original version, always", "Cat's overridden version", "Both versions, one after another", "Neither — it raises an error"],
      correctIndex: 1,
      explanation: "Method resolution looks at the actual object's class first, so the subclass's override takes priority."
    },
    {
      question: "What does @property let you do?",
      choices: ["Make a method callable like a plain attribute, no parentheses needed", "Make an attribute permanently private", "Turn a class into a function", "Skip writing __init__"],
      correctIndex: 0,
      explanation: "@property lets you access a computed method's result the same way you'd access a normal attribute."
    },
    {
      question: "Which dunder method primarily controls what print(obj) displays?",
      choices: ["__init__", "__repr__ only", "__str__", "__call__"],
      correctIndex: 2,
      explanation: "print() and str() use __str__ first if it's defined; __repr__ is the fallback and the more technical representation."
    },
    {
      question: "Composition is best described as:",
      choices: ["An \"is-a\" relationship", "A \"has-a\" relationship — building objects out of other objects", "The exact same thing as inheritance", "A way to avoid using classes entirely"],
      correctIndex: 1,
      explanation: "Composition builds functionality by combining objects, rather than through a parent/child class hierarchy."
    }
  ]
};
