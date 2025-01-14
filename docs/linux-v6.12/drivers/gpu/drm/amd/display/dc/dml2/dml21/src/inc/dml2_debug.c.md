---
sidebar_position: 1
---
# dml2_debug.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/amd/display/dc/dml2/dml21/src/inc/dml2_debug.c`

### コンテンツ

```c
// SPDX-License-Identifier: MIT
//
// Copyright 2024 Advanced Micro Devices, Inc.

#include "dml2_debug.h"

int dml2_printf(const char *format, ...)
{
#ifdef _DEBUG
#ifdef _DEBUG_PRINTS
	int result;
	va_list args;
	va_start(args, format);

	result = vprintf(format, args);

	va_end(args);

	return result;
#else
	return 0;
#endif
#else
	return 0;
#endif
}

void dml2_assert(int condition)
{
	//ASSERT(condition);
}

```
