---
sidebar_position: 5
---
# so2s.sh

### ファイル情報

- パス: `linux-v6.12/arch/csky/kernel/vdso/so2s.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0+

sed 's!\([0-9a-f]*\) T \([a-z0-9_]*\)\(@@LINUX_5.10\)*!.global \2\n.set \2,0x\1!' \
| grep '^\.'

```
