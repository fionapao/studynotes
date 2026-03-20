# Swift Basics

## Getting Started

Swift is a powerful, modern language for building apps across Apple platforms. This page collects quick notes and code snippets for reference.

### Running Swift

To run a Swift script from the command line:

```bash
swift myfile.swift
```

To run in Xcode, create a new "App" or "Playground" project.


## Key Concepts

### Variables & Constants

```swift
var message = "Hello, Swift!"
let pi = 3.14159
```

- `var` declares a mutable variable.
- `let` declares an immutable constant.

### Optionals

Optionals represent values that may be absent.

```swift
var name: String? = "Taylor"
print(name ?? "No name")
```

### Functions

```swift
func greet(name: String) -> String {
  return "Hello, \(name)!"
}

print(greet(name: "Swift"))
```

## Useful Standard Library APIs

| API | Description |
| --- | ----------- |
| `map` | Transform each element in a collection |
| `filter` | Filter elements matching a condition |
| `sorted()` | Sort a collection |


## Notes

- Swift uses type inference so many types can be omitted.
- Use `guard` for early exits when conditions aren’t met.
