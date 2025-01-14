---
sidebar_position: 1
---
# expected_stderr

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/preprocess/variable/expected_stderr`

### コンテンツ

```txt
Kconfig:10: SIMPLE = 1
Kconfig:16: RECURSIVE = 2
Kconfig:22: SIMPLE = 1 3
Kconfig:28: RECURSIVE = 2 4
Kconfig:35: UNDEFINED_VARIABLE = 4
Kconfig:41: AB = 5
Kconfig:45: Hello, my name is John.
Kconfig:50: Hello, my name is .
Kconfig:53: Hello, my name is John.

```
