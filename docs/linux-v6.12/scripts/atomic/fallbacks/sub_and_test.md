---
sidebar_position: 19
---
# sub_and_test

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/sub_and_test`

### コンテンツ

```txt
cat <<EOF
	return raw_${atomic}_sub_return(i, v) == 0;
EOF

```
