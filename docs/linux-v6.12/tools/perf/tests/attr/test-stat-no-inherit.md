---
sidebar_position: 47
---
# test-stat-no-inherit

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-stat-no-inherit`

### コンテンツ

```txt
[config]
command = stat
args    = -i -e cycles kill >/dev/null 2>&1
ret     = 1

[event:base-stat]
inherit=0
optional=1

```
