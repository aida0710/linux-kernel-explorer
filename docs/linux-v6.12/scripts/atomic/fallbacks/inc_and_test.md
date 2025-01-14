---
sidebar_position: 13
---
# inc_and_test

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/inc_and_test`

### コンテンツ

```txt
cat <<EOF
	return raw_${atomic}_inc_return(v) == 0;
EOF

```
