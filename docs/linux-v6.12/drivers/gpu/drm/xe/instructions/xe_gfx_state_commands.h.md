---
sidebar_position: 2
---
# xe_gfx_state_commands.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/xe/instructions/xe_gfx_state_commands.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
/*
 * Copyright © 2024 Intel Corporation
 */

#ifndef _XE_GFX_STATE_COMMANDS_H_
#define _XE_GFX_STATE_COMMANDS_H_

#include "instructions/xe_instr_defs.h"

#define GFX_STATE_OPCODE			REG_GENMASK(28, 26)

#define GFX_STATE_CMD(opcode) \
	(XE_INSTR_GFX_STATE | REG_FIELD_PREP(GFX_STATE_OPCODE, opcode))

#define STATE_WRITE_INLINE			GFX_STATE_CMD(0x0)

#endif

```
