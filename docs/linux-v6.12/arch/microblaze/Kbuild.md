---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/microblaze/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-y			+= kernel/
obj-y			+= mm/
obj-$(CONFIG_PCI)	+= pci/
obj-y			+= boot/dts/

# for cleaning
subdir- += boot

```
