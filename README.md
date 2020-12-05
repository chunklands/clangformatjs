# clangformatjs

Formats your code according to the .clang-format file and a given glob.

Just give it a path.

```bash
npx clangformatjs src/**/*{.cpp,.hpp}
```

Or use another `clang-format` bin.

```bash
npx clangformatjs --clang-format-bin=/usr/local/bin/clang-format src/**/*{.c,.h}
```