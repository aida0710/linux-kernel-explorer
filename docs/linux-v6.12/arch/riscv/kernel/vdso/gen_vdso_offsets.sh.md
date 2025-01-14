---
sidebar_position: 3
---
# gen_vdso_offsets.sh

### ファイル情報

- パス: `linux-v6.12/arch/riscv/kernel/vdso/gen_vdso_offsets.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

LC_ALL=C
sed -n -e 's/^[0]\+\(0[0-9a-fA-F]*\) . \(__vdso_[a-zA-Z0-9_]*\)$/\#define \2_offset\t0x\1/p'

```
