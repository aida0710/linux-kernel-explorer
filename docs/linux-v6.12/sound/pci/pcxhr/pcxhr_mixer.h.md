---
sidebar_position: 11
---
# pcxhr_mixer.h

### ファイル情報

- パス: `linux-v6.12/sound/pci/pcxhr/pcxhr_mixer.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * Driver for Digigram pcxhr compatible soundcards
 *
 * include file for mixer
 *
 * Copyright (c) 2004 by Digigram <alsa@digigram.com>
 */

#ifndef __SOUND_PCXHR_MIXER_H
#define __SOUND_PCXHR_MIXER_H

/* exported */
int pcxhr_create_mixer(struct pcxhr_mgr *mgr);

#endif /* __SOUND_PCXHR_MIXER_H */

```
