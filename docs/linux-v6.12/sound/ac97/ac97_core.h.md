---
sidebar_position: 1
---
# ac97_core.h

### ファイル情報

- パス: `linux-v6.12/sound/ac97/ac97_core.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2016 Robert Jarzmik <robert.jarzmik@free.fr>
 */

unsigned int snd_ac97_bus_scan_one(struct ac97_controller *adrv,
				   unsigned int codec_num);

static inline bool ac97_ids_match(unsigned int id1, unsigned int id2,
				  unsigned int mask)
{
	return (id1 & mask) == (id2 & mask);
}

```
