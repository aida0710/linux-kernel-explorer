---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/hda/ext/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
snd-hda-ext-core-y := hdac_ext_bus.o hdac_ext_controller.o hdac_ext_stream.o

obj-$(CONFIG_SND_HDA_EXT_CORE) += snd-hda-ext-core.o

```
