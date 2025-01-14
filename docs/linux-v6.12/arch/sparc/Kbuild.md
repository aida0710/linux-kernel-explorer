---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/sparc/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# core part of the sparc kernel
#

obj-y += kernel/
obj-y += mm/
obj-y += math-emu/
obj-y += net/
obj-y += crypto/
obj-$(CONFIG_SPARC64) += vdso/

# for cleaning
subdir- += boot

```
