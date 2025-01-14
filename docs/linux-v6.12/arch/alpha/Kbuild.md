---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/alpha/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y			+= kernel/ mm/
obj-$(CONFIG_MATHEMU)	+= math-emu/

# for cleaning
subdir- += boot

```
