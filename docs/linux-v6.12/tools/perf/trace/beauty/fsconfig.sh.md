---
sidebar_position: 13
---
# fsconfig.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/trace/beauty/fsconfig.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: LGPL-2.1

if [ $# -ne 1 ] ; then
	beauty_uapi_linux_dir=tools/perf/trace/beauty/include/uapi/linux/
else
	beauty_uapi_linux_dir=$1
fi

linux_mount=${beauty_uapi_linux_dir}/mount.h

printf "static const char *fsconfig_cmds[] = {\n"
ms='[[:space:]]*'
sed -nr "s/^${ms}FSCONFIG_([[:alnum:]_]+)${ms}=${ms}([[:digit:]]+)${ms},.*/\t[\2] = \"\1\",/p" \
	${linux_mount}
printf "};\n"

```
