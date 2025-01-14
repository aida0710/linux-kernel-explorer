---
sidebar_position: 50
---
# sndrv_ctl_ioctl.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/trace/beauty/sndrv_ctl_ioctl.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: LGPL-2.1

[ $# -eq 1 ] && beauty_uapi_sound_dir=$1 || beauty_uapi_sound_dir=tools/perf/trace/beauty/include/uapi/sound/

printf "static const char *sndrv_ctl_ioctl_cmds[] = {\n"
grep "^#define[\t ]\+SNDRV_CTL_IOCTL_" $beauty_uapi_sound_dir/asound.h | \
	sed -r 's/^#define +SNDRV_CTL_IOCTL_([A-Z0-9_]+)[\t ]+_IO[RW]*\( *.U., *(0x[[:xdigit:]]+),?.*/\t[\2] = \"\1\",/g'
printf "};\n"

```
