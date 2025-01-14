---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/mediatek/mdp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
mtk-mdp-y += mtk_mdp_core.o
mtk-mdp-y += mtk_mdp_comp.o
mtk-mdp-y += mtk_mdp_m2m.o
mtk-mdp-y += mtk_mdp_regs.o
mtk-mdp-y += mtk_mdp_vpu.o

obj-$(CONFIG_VIDEO_MEDIATEK_MDP) += mtk-mdp.o

ccflags-y += -I$(srctree)/drivers/media/platform/mediatek/vpu

```
