---
sidebar_position: 1
---
# expected_stderr

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/err_recursive_inc/expected_stderr`

### コンテンツ

```txt
Recursive inclusion detected.
Inclusion path:
  current file : Kconfig.inc1
  included from: Kconfig.inc3:2
  included from: Kconfig.inc2:4
  included from: Kconfig.inc1:5

```
