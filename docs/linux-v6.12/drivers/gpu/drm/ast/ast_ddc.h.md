---
sidebar_position: 2
---
# ast_ddc.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ast/ast_ddc.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */

#ifndef __AST_DDC_H__
#define __AST_DDC_H__

struct ast_device;
struct i2c_adapter;

struct i2c_adapter *ast_ddc_create(struct ast_device *ast);

#endif

```
