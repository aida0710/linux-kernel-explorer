---
sidebar_position: 17
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ast/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the drm device driver.  This driver provides support for the
# Direct Rendering Infrastructure (DRI) in XFree86 4.1.0 and higher.

ast-y := \
	ast_ddc.o \
	ast_dp501.o \
	ast_dp.o \
	ast_drv.o \
	ast_main.o \
	ast_mm.o \
	ast_mode.o \
	ast_post.o \
	ast_sil164.o \
	ast_vga.o

obj-$(CONFIG_DRM_AST) := ast.o

```
