---
sidebar_position: 1
---
# Kbuild

### ファイル情報

- パス: `linux-v6.12/arch/openrisc/Kbuild`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-y += lib/ kernel/ mm/
obj-y += boot/dts/

# for cleaning
subdir- += boot

```
