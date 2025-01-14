---
sidebar_position: 24
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/pci/au88x0/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
snd-au8810-y := au8810.o
snd-au8820-y := au8820.o
snd-au8830-y := au8830.o

obj-$(CONFIG_SND_AU8810) += snd-au8810.o
obj-$(CONFIG_SND_AU8820) += snd-au8820.o
obj-$(CONFIG_SND_AU8830) += snd-au8830.o

```
