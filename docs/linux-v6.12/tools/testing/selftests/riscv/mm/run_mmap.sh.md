---
sidebar_position: 6
---
# run_mmap.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/riscv/mm/run_mmap.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

original_stack_limit=$(ulimit -s)

./mmap_default

# Force mmap_bottomup to be ran with bottomup memory due to
# the unlimited stack
ulimit -s unlimited
./mmap_bottomup
ulimit -s $original_stack_limit

```
